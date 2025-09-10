import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Agendamento() {
  const [formData, setFormData] = useState({
    nomeeee: '',
    nascimento: '',
    necessidade: '',
    data: '',
    horario: '',
    email: ''
  });

  const horarios = ['10h30', '11h', '11h30', '12h', '12h30'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const sendEmail = (e) => {
  e.preventDefault();

  const templateParams = {
    to_name: formData.nome,
    to_email: formData.email, // <- usado como destinatário
    data: formData.data,
    horario: formData.horario,
  };

  emailjs
    .send(
      "service_sto5a0s",   // Service ID
      "template_82cbyk9",  // Template ID
      templateParams,
      "_Fk5SFC6WXJylb-0V" // Public Key
    )
    .then(() => alert("Agendamento enviado com sucesso!"))
    .catch((err) => alert("Erro ao enviar: " + err.text));
};



  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20 }}>
      <img src="/logo.jpg" alt="Logo" style={{ width: 100, marginBottom: 20 }} />
      <h1>Agendamento de Serviços</h1>
      <form onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: 10, width: 300 }}>
        <input name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} required />
        <input type="date" name="nascimento" value={formData.nascimento} onChange={handleChange} required />
        <select name="necessidade" value={formData.necessidade} onChange={handleChange} required>
          <option value="">Selecione</option>
          <option>Imposto de Renda Pessoa Física (IRPF) - DIRPF</option>
          <option>Malha</option>
          <option>Retificadora</option>
          <option>CPF</option>
          <option>CNPJ</option>
          <option>Microempreendedor Individual (MEI)</option>
          <option>E-Social Fiscal</option>
          <option>PERDCOMP MEI</option>
          <option>Código E-CAC</option>
          <option>Parcelamentos</option>
          <option>Emissão de DARF</option>
          <option>Outros Serviços Receita Federal</option>
        </select>
        <input type="date" name="data" value={formData.data} onChange={handleChange} required />
        <select name="horario" value={formData.horario} onChange={handleChange} required>
          <option value="">Selecione o horário</option>
          {horarios.map((hora, idx) => (
            <option key={idx} value={hora}>{hora}</option>
          ))}
        </select>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <button type="submit">Confirmar Agendamento</button>
      </form>
    </div>
  );
}