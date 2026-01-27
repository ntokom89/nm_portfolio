import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-services-offered',
  standalone: true,
  templateUrl: './services-offered.component.html',
  styleUrl: './services-offered.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesOfferedComponent {
  portfolioDataService = inject(PortfolioDataService);
  services = this.portfolioDataService.getServices();
}
