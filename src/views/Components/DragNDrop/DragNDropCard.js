import React, { useEffect, useState } from 'react';
import { useDrag } from 'react-dnd';
import { service } from '../../../services';
import Loading from '../Layout/Loading/Loading';

function DragNDropCard({ type, url, basketUrl }) {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState();
  const [{ isDragging }, dragRef] = useDrag({
    type: type,
    item: { url },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = service.list(url);

    request.then((res) => {
      setPokemon({
        name: res.data.name,
        img: res.data.sprites.front_default,
      });
      setLoading(false);
    });

    return () => {
      cancel();
    };
  }, [url]);

  if (loading) return <Loading />;

  return (
    <div
      className={`drag-card ${
        basketUrl === url || isDragging ? 'disp-none' : ''
      }`}
      ref={dragRef}
    >
      <img src={pokemon.img} alt={pokemon.name} />
      <h6>{pokemon.name}</h6>
    </div>
  );
}

export default DragNDropCard;
