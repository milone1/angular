import { NgModule } from "@angular/core";
//importaciones de material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";

@NgModule({
    exports: [MatToolbarModule, MatCardModule, MatButtonModule, MatIconModule]
})

export class MaterialModule {}