import Layout from '../components/Layout/Layout';

export default function Home() {
  return (
    <div
      className={`flex h-screen justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white `}
    >
      <Layout title="Cadastro Simples">
        <span>Conteudo</span>
      </Layout>
    </div>
  );
}
