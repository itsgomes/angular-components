import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Theme } from '../models/theme.model';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  public currentTheme: WritableSignal<Theme> = signal(Theme.DARK);

  public constructor(@Inject(DOCUMENT) private document: Document) {
    this.initializeOnBootstrap();
  }

  public toggleTheme(): void {
    if (this.currentTheme() == Theme.DARK)
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
    this.document.documentElement.classList.add(...[arr]);
  }

  private removeClasses(arr: string): void {
    this.document.documentElement.classList.remove(...[arr]);
  }
}