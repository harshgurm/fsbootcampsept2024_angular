import { CanActivateFn } from '@angular/router';
import { DataService } from './data.service';
import { inject } from '@angular/core';
export const authGuard: CanActivateFn = (route, state) => {

  const dataService:DataService = inject(DataService);

  if(!dataService.isAuthenticated()){
    return false;
  }
  return true;
};
