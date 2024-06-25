import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { LoadingService } from '../../../shared/services/loading.service';
import { HTTP_STATUS_SLEEP_TIME, HttpStatusRequest } from '../../models/http-status-api.model';
import { HttpStatusApiService } from '../../services/http-status-api.service';

@Component({
  selector: 'app-http-request-example',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './http-request-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HttpRequestExampleComponent {
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

  protected forceError(): void {
    throw 'An unhandled error has occurred.';
  }
}