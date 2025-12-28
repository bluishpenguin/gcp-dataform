// definitions/sources.js 

const tables = ["location",
    "menu",
    "order",
    "order_item"
];
tables.forEach((table) => {
    declare
        ({
            database: dataform.projectConfig.vars.raw_project,
            schema: dataform.projectConfig.vars.raw_dataset,
            name: `${table}_raw`,
        });
});
