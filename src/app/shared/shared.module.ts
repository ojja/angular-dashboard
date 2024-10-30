// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [] // Leave exports empty as we won't export standalone items here
})
export class SharedModule {}
