import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Theme } from '../models/theme.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public currentTheme: WritableSignal<Theme> = signal(Theme.DARK);

  public constructor(@Inject(DOCUMENT) private _document: Document) {
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
    this.setTheme(this.currentTheme());
  }

  private setTheme(theme: Theme): void {
    this.removeClasses(this.currentTheme());
    this.addClasses(theme);
    this.currentTheme.set(theme);
  }

  private addClasses(arr: string): void {
    this._document.documentElement.classList.add(...[arr]);
  }

  private removeClasses(arr: string): void {
    this._document.documentElement.classList.remove(...[arr]);
  }
}