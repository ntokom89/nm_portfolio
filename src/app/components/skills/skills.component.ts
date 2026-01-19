
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  portfolioDataService = inject(PortfolioDataService);
  skills = this.portfolioDataService.getSkills();
}
