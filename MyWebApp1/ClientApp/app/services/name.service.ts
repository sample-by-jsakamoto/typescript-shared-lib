import { Foo } from 'lib/models/foo';

export var NameService = {
    getAppName: () => {
        return { id: 0, name: "APP1" } as Foo;
    }
};