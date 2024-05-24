import { Component } from '@angular/core';
import { LayoutService } from '../../../services/layout.service';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrl: './color-picker.component.scss'
})

export class ColorPickerComponent {

  public primary: string = "#006666";
  public secondary: string = "#FE6A49";
  public MIXLayout: string = "default";

  public primary_color = localStorage.getItem('primary_color') || '#006666';
  public secondary_color = localStorage.getItem('secondary_color') || '#FE6A49';

  constructor(public layout: LayoutService) {
    document.documentElement.style.setProperty("--theme-deafult", localStorage.getItem("primary_color"));
    document.documentElement.style.setProperty("--theme-secondary", localStorage.getItem("secondary_color"));
    var primary = localStorage.getItem("primary_color") || this.layout.config.color.secondary_color;
    var secondary = localStorage.getItem("secondary_color") || this.layout.config.color.secondary_color;
    this.layout.config.color.primary_color = primary;
    this.layout.config.color.secondary_color = secondary;
    localStorage.getItem("primary_color") || this.layout.config.color.primary_color;
    localStorage.getItem("secondary_color") || this.layout.config.color.secondary_color;
  }

  applyColor() {
    localStorage.setItem("primary_color", this.primary_color);
    localStorage.setItem("secondary_color", this.secondary_color);
    this.layout.config.color.primary_color = this.primary_color;
    this.layout.config.color.secondary_color = this.secondary_color;
    window.location.reload();
  }

  resetColor() {
    document.documentElement.style.setProperty("--theme-deafult", "#006666");
    document.documentElement.style.setProperty("--theme-secondary", "#FE6A49");
    (<HTMLInputElement>document.getElementById("ColorPicker1")).value = "#006666";
    (<HTMLInputElement>document.getElementById("ColorPicker2")).value = "#FE6A49";
    this.layout.config.color.primary_color = "#006666";
    this.layout.config.color.secondary_color = "#FE6A49";
    localStorage.setItem("primary_color", "#006666");
    localStorage.setItem("secondary_color", "#FE6A49");
    window.location.reload();
  }

  customizeMixLayout(val: string) {
    this.MIXLayout = val;
    this.layout.config.settings.layout_version = val;
    document.body?.classList.remove("light-only", "dark-sidebar", "dark-only");
    if (val === "default") {
      document.body?.classList.add("light-only");
    } else if (val === "dark-sidebar") {
      document.body?.classList.add("dark-sidebar");
    } else {
      document.body?.classList.add("dark-only");
    }
  }

}
