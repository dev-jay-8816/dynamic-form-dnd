import { Sequelize, ModelCtor } from 'sequelize-typescript';
import path from 'path'
import fs from 'fs'

let db: Sequelize | undefined;

const initSequelize = () => {
    const basename = path.basename(__filename);
    const env = process.env.NODE_ENV || 'development';
    const sequelize = new Sequelize('mysql://root:password@localhost:3306/user_product', {dialect: 'mysql', timezone: '+00:00', });

    const _models = fs.readdirSync(__dirname)
        .filter(file => {
            return (
                file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
            );
        })
        .map(file => {
            // const model = sequelize['import'](path.join(__dirname, file));
            const model: ModelCtor = require(path.join(__dirname, file))?.default;
            return model;
        });

    sequelize.addModels(_models);
    return sequelize;
}

if (!db) {
    db = initSequelize();
}

export default db;