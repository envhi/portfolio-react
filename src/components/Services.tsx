import {
  HiCog,
  HiDesktopComputer,
  HiDatabase,
} from "react-icons/hi"

export default function Services() {
  const services = [
    {
      title: "Front-End",
      description:
        "Desenvolvimento de sites e sistemas web estáticos e dinâmicos com React.js",
      icon: <HiDesktopComputer className="h-12 w-12" />,
    },
    {
      title: "Back-End",
      description: "Desenvolvimento de sistemas e APIs REST com Node.js/Express, autenticação via Json Web Token.",
      icon: <HiCog className="h-12 w-12" />,
    },
    {
      title: "Banco de Dados",
      description: "PostgreSQL/Sequelize, MongoDB/Mongoose",
      icon: <HiDatabase className="h-12 w-12" />,
    },
  ]

  return (
    <section className="container mx-auto my-12 max-w-4xl p-4">
      <div className="p-4 text-center">
        <p className="text-sm font-semibold uppercase text-blue-600">
          Skills
        </p>
        <h2 className="mb-2 font-bold text-blue-900">
          <span className="mr-2 font-headline text-3xl">Meus</span>
          <span className="font-handwriting text-4xl">Serviços</span>
        </h2>
        <p className=" text-sm text-gray-600">
          Tenho conhecimentos tanto no Back quanto no Front-End
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-2 md:flex-row">
        {services.map((service, index) => (
          <div
            className="basis-1/3 rounded-lg bg-blue-700 p-4 text-white"
            key={`service-${index}`}
          >
            <div className="mb-2">{service.icon}</div>
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
