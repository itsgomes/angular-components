import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, signal, WritableSignal } from '@angular/core';
import { StorageKeys } from '../models/local-storage.model';
import { Theme } from '../models/theme.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public currentTheme: WritableSignal<Theme> = signal(Theme.DARK);

  public constructor(
    private localStorageService: LocalStorageService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.initializeOnBootstrap();
  }

  public get isDarkTheme(): boolean {
    return this.currentTheme() == Theme.DARK;
  }

  public get isLightTheme(): boolean {
    return this.currentTheme() == Theme.LIGHT;
  }

  public toggleTheme(): void {
    if (this.isDarkTheme)
      this.setTheme(Theme.LIGHT);
    else
      this.setTheme(Theme.DARK);
  }

  private initializeOnBootstrap(): void {
    const localStorageTheme: Theme | null = this.getLocalStorageTheme() as Theme;

    if (localStorageTheme)
      this.setTheme(localStorageTheme);
    else
      this.setTheme(this.currentTheme());
  }

  private setTheme(theme: Theme): void {
    this.removeClasses(this.currentTheme());
    this.addClasses(theme);
    
    this.currentTheme.set(theme);

    this.setLocalStorageTheme();
  }

  private addClasses(arr: string): void {
    this.document.documentElement.classList.add(...[arr]);
  }

  private removeClasses(arr: string): void {
    this.document.documentElement.classList.remove(...[arr]);
  }

  private getLocalStorageTheme(): string | null {
    return this.localStorageService.getItem(StorageKeys.Theme);
  }

  private setLocalStorageTheme(): void {
    this.localStorageService.setItem(StorageKeys.Theme, this.currentTheme());
  }
}