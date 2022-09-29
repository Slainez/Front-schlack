import { Router } from '@angular/router';
export function getIdFromUrl(router: Router): number {
  let url = router.routerState.snapshot.url;
  return Number(url.substring(url.lastIndexOf('/') + 1));
}
