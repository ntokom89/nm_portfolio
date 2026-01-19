
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-education',
  standalone: true,
  templateUrl: './education.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationComponent {
  portfolioDataService = inject(PortfolioDataService);
  educationAndCerts = this.portfolioDataService.getEducationAndCerts();
}
