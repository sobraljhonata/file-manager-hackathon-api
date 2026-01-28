import { DataTypes, Model } from "sequelize";
import sequelize from "../database";
import User from "./user-model";

class Documento extends Model {
  id!: number;
  nome!: string;
  email!: string;
  telefone!: string;
  userId!: number;
  user!: User; // Associação com o modelo User
}

Documento.init(
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
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alunoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Alunos", // Nome do modelo alvo
        key: "id", // Chave no modelo alvo que estamos referenciando
      },
    },
  },
  {
    sequelize,
    modelName: "Documento",
  }
);
Documento.belongsTo(User, { foreignKey: "alunoId", as: "aluno" });
export default Documento;