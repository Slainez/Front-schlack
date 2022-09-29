import { Router } from '@angular/router';
/**
 *
 * @Description this Function is used to get the Channel id from url
 *
 */
export function getIdFromUrl(router: Router): number {
  let url = router.routerState.snapshot.url;
  return Number(url.substring(url.lastIndexOf('/') + 1));
}
