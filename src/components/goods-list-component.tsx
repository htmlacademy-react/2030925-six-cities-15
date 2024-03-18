type GoodsListProps = {
    goods: string[];
};

export default function GoodsListComponent({goods}: GoodsListProps): JSX.Element {
  return(
    <ul className="offer__inside-list">
      {goods.map((good) => (
        <li className="offer__inside-item" key={good}>
          {good}
        </li>
      ))}
    </ul>
  );
}
