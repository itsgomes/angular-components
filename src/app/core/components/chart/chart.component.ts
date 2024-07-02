import { ChangeDetectionStrategy, Component, afterNextRender } from "@angular/core";
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  standalone: true,
  templateUrl: 'chart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent {
  protected chart: any = [];
  protected readonly chartId: string = 'canvas';

  public constructor() {
    afterNextRender(() => this.createChart());
  }

  private createChart(): void {
    this.chart = new Chart(this.chartId, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          { label: 'Computer sold', data: [12, 19, 3, 5, 2, 3] },
          { label: 'Playstation sold', data: [5, 14, 13, 3, 7, 5] },
          { label: 'Xbox sold', data: [7, 7, 8, 4, 6, 1] }
        ]
      },
      options: {
        scales: { 
          y: { beginAtZero: true }
        }
      }
    });
  }
}