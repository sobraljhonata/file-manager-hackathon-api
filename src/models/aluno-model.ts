import { DataTypes, Model } from "sequelize";
import sequelize from "../database";
import User from "./user-model";

class Aluno extends Model {
  id!: number;
  nome!: string;
  cpf!: string;
  telefone!: string;
  userId!: number;
  user!: User; // Associação com o modelo User
}

Aluno.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users", // Nome do modelo alvo
        key: "id", // Chave no modelo alvo que estamos referenciando
      },
    },
  },
  {
    sequelize,
    modelName: "Aluno",
  }
);
Aluno.belongsTo(User, { foreignKey: "userId", as: "user" });
export default Aluno;