import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HttpStatusRequest } from '../../models/http-status-api.model';
import { HttpStatusApiService } from '../../services/http-status-api.service';
import { HTTP_STATUS_SLEEP_TIME } from '../../constants/constant';
import { LoadingService } from '../../services/loading.service';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { TemplateComponent } from '../../shared/components/template/template.component';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [ButtonComponent, TemplateComponent],
  templateUrl: './loading.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingComponent {
  public constructor(
    protected readonly loadingService: LoadingService, 
    private httpStatusApiService: HttpStatusApiService
  ) {}

  protected request(code: number): void {
    const request: HttpStatusRequest = {
      code,
      sleep: HTTP_STATUS_SLEEP_TIME
    };

    this.httpStatusApiService.getHttpStatus(request).subscribe();
  }
}