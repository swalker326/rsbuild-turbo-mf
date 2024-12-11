
    export type RemoteKeys = 'host/RemoteEntry';
    type PackageType<T> = T extends 'host/RemoteEntry' ? typeof import('host/RemoteEntry') :any;