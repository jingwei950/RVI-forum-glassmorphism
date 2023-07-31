import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'social-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-icon.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialIconComponent {
  @Input() icon_name!: string;

  ngOnInit() {
    console.log(this.icon_name);
  }
}
