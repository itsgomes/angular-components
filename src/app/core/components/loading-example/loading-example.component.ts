import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { LoadingService } from '../../../shared/services/loading.service';
import { HTTP_STATUS_SLEEP_TIME, HttpStatusRequest } from '../../models/http-status-api.model';
import { HttpStatusApiService } from '../../services/http-status-api.service';

@Component({
  selector: 'app-loading-component',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './loading-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingExampleComponent {
  public constructor(
    private _httpStatusApiService: HttpStatusApiService,
    protected loadingService: LoadingService
  ) {}

  protected request(code: number): void {
    const request: HttpStatusRequest = {
      code,
      sleep: HTTP_STATUS_SLEEP_TIME
    };

    this._httpStatusApiService.getHttpStatus(request)
      .subscribe();
  }
}