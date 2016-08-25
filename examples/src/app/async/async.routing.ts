import { RouterModule, Routes } from '@angular/router';

import { SimpleHttpServiceComponent, BetterAsyncServiceComponent, CachedAsyncServiceComponent, RefCountComponent, WrapApiComponent, ErrorComponent } from './index';

const routes: Routes = [
    {
        path: 'async/simple',
        component: SimpleHttpServiceComponent
    },
    {
        path: 'async/better',
        component: BetterAsyncServiceComponent
    },
    {
        path: 'async/cached',
        component: CachedAsyncServiceComponent
    },
    {
        path: 'async/wrap',
        component: WrapApiComponent
    },
    {
        path: 'async/refCount',
        component: RefCountComponent
    },
    {
        path: 'async/error',
        component: ErrorComponent
    }
]

export const asyncRouting = RouterModule.forChild(routes);