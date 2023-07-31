import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'post-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-categories.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCategoriesComponent {
  @Input() icon_name?: string;
}
