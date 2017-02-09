8.9.3 / 2017-02-09
==================

  * Fix - Make sure `bind` does not mutate columns.

8.9.2 / 2017-02-09
==================

  * Fix - Match old array merging order for `bind`.

8.9.1 / 2017-02-09
==================

  * Fix - Restore old merging behavior for `bind`. Now it should concat arrays.

8.9.0 / 2017-02-09
==================

  * Chore - Allow treetabular 3 through a peer dependency.

8.8.1 / 2017-02-06
==================

  * Bug fix - Make sure lodash imports are relative so it doesn't bundle entire lodash.

8.8.0 / 2017-02-06
==================

  * Chore - Replace `webpack-merge` with `lodash.mergeWith`. #2

8.7.1 / 2017-01-17
==================

  * Bug fix - Fix `sortableHeader` sorting when `getSortingColumns` is used. #2

8.7.0 / 2017-01-16
==================

  * Feature - Allow `sortableHeader` `getSortingColumns` to be customized. #1

8.6.0 / 2017-01-06
==================

  * Bug fix - Add *reactabular-resizable* to peer dependencies.
  * Chore - Bump *webpack-merge* range to accept 2.x series.

8.4.0 / 2016-12-01
==================

  * Feature - Expose `onDragColumnStart` and `onDragColumnEnd` at `resizableHeader`.

8.2.1 / 2016-11-30
==================

  * Bug fix - Drop `reactabular` peer dependency as that's not needed anymore.

8.0.0 / 2016-11-27
==================

  * Initial release.
