import mongoose from 'mongoose';

const parametro = new mongoose.Schema({
  partNumber: {
    type: String,
    require: true,
    unique: true,
    lowerCase: true,
  },
  linha: {
    type: String,
    require: true,
  },
  nomeProgramaCorte: {
    type: String,
    require: true,
  },
  anguloVidea: {
    type: String,
    require: true,
  },
  maquina: {
    type: String,
    require: true,
  },
  dataRevisao: {
    type: String,
    require: true,
  },
  tempoEnvio1: {
    type: String,
  },
  tempoEnvio2: {
    type: String,
  },
  atrasoEntradaBraco: {
    type: String,
  },
  retardoVentosa: {
    type: String,
  },
  atrasoSaidaBracoDianteira: {
    type: String,
  },
  atrasoSaidaBracoTraseira: {
    type: String,
  },
  tempoGiroDianteira: {
    type: String,
  },
  tempoGiroTraseira: {
    type: String,
  },
  velocidadeLixEsq: {
    type: String,
  },
  velocidadeLapDireita: {
    type: String,
  },
  qtdVoltasFrontal: {
    type: String,
  },
  qtdVoltasTraseira: {
    type: String,
  },
  pressaoLixado: {
    type: String,
  },
  pressaoLapidado: {
    type: String,
  },
  velocidadeSalto: {
    type: String,
    require: true,
  },
  velocidadeProcessamento: {
    type: String,
    require: true,
  },
  intensidade: {
    type: String,
    require: true,
  },
  frequencia: {
    type: String,
    require: true,
  },
  temperaturaLavadora: {
    type: String,
    require: true,
  },
  superficie: {
    type: String,
    require: true,
  },
  metal: {
    type: String,
    require: true,
  },
  raio: {
    type: String,
    require: true,
  },
  tipo: {
    type: String,
    require: true,
  },
  gravacao: {
    type: String,
    require: true,
  },

  // NJ
  atrasarAvanco: {
    type: String,
  },
  atrasarLeituraEspelho: {
    type: String,
  },
  p1: [
    {
      a1: {
        type: String,
      },
      a2: {
        type: String,
      },
      a3: {
        type: String,
      },
      a4: {
        type: String,
      },
      b1: {
        type: String,
      },
      b2: {
        type: String,
      },
      b3: {
        type: String,
      },
      b4: {
        type: String,
      },
    },
  ],
  
  // NJ

  rvm: {
    type: Boolean,
  },
  rvmRaio: {
    type: String,
  },
  rvmMin: {
    type: String,
  },
  rvmMax: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('parametro', parametro);
