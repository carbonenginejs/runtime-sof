# Pending SOF classes

This directory is a work queue, not the completed runtime surface.

Decorated schema shells remain here until their applicable legacy SOF behavior
has been reviewed and ported. A completed class moves to the matching
`src/sof/<domain>` directory; only one decorated implementation may exist.

The current 33 behavior-pending legacy classes are the JavaScript files in this
directory other than these three runtime-only schema additions:

- `EveSofDataMeshInstance`
- `EveSOFUtilsParameterName`
- `IEveSOFDataHullExtensionPlacementDistribution`

Those additions also remain here until their ownership and required behavior
have been reviewed. Donor-only ccpwgl helpers without a Carbon class or schema
are not transpilation targets.

`index.js` exports only pending classes. Completed classes are exported from
`src/sof/index.js` and its domain barrels.
