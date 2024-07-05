import { Component, signal, WritableSignal } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { debounceTime, distinctUntilChanged } from "rxjs";
import { environment } from "../../../../environment/environment";
import { ComponentsService } from "../../../core/services/components.service";

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: 'search-bar.component.html'
})
export class SearchBarComponent {
  protected formValue: FormControl<string | null> = new FormControl('');
  protected debounceTime: WritableSignal<number> = signal(environment.searchDebounce);

  public constructor(private _componentsService: ComponentsService) {
    this.formValue.valueChanges
      .pipe(
        debounceTime(this.debounceTime()),
        distinctUntilChanged(),
        takeUntilDestroyed()
      ).subscribe((value: string | null) => this.onValueChanged(value || ''));
  }

  private onValueChanged(value: string): void {
    this._componentsService.queryComponents(value);
  }
}