import Image from "next/image";

interface CardProps {
  name: string;
  imageUrl: string;
  description: string;
  tags: string[];
  link: string;
}

const Card: React.FC<CardProps> = ({ name, imageUrl, description, tags, link }) => {
  return (
    <div className="card w-96 bg-base-300 shadow-xl transition duration-300 ease-in-out hover:bg-base-200 hover:-translate-y-1 hover:scale-110">
      <a href={link}>
        <figure className="w-full h-64 overflow-hidden rounded-t-lg">
          <Image
            src={imageUrl}
            alt={name}
            layout="responsive"
            width={384}
            height={256}
            className="rounded-t-lg"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions">
            {tags.map((tag, index) => (
              <div key={index} className="badge badge-secondary">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
