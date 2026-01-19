
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  portfolioDataService = inject(PortfolioDataService);
  personalInfo = this.portfolioDataService.getPersonalInfo();
  currentYear = new Date().getFullYear();
}
