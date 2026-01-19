
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  portfolioDataService = inject(PortfolioDataService);
  summary = this.portfolioDataService.getPersonalInfo().summary;
}
