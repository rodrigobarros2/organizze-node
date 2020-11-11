const mongoose = require('../config/database');

const { Schema } = mongoose;

const TaskSchema = new Schema({
	macaddress: { type: String, required: true },
	type: { type: Number, required: true },
	title: { type: String, required: true },
	description: { type: String, required: true },
	when: { type: Date, required: true },
	done: { type: Boolean, default: false },
	created: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('Task', TaskSchema);

/* aqui é a representação das tarefas  */

/* macaddress, captura o mac do celular que cadastrou a atividade */
/* type, é o tipo de tarefa cadastrada */
/* title, titulo da tarefa digitada pelo usuário */
/* when vai guardar a data e a hora */
/* done, quando o botão tiver habilitado ou não */
/* created, quando a tividade for criada, pegando o valor da data e da hora atual */
