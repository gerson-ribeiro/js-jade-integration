# js-jade-integration
RESTful package to facilitate development integration.
## Usage

### Step 1
Install v1 from repository
``npm i js-jade-integration``

### Step 2
Instantiate XHRManager into your Resource package/file.
Hint: In ReactJs and ReactNative, You should use FactoryPattern.
``
//Resource.js
import api from "js-jade-integration";

export const CardResource = () =>
    new api.XHRManager("https://api.magicthegathering.io/v1", "cards");
``

### Step 3
Use your resource in your functionComponent, like this:
``
const MTGRes = CardResource();

export const CardController = (prop) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        getCards(setCards);
    }, [name]);

    return (
            <div className="row justify-content-center">
                {cards.cards.map((card) => (
                    <div className="col-3 text-center" key={card.id}>
                        <img
                            src={card.imageUrl}
                            className="image"
                            alt={card.originalText}
                        />
                        <p className="text-center">{card.name}</p>
                    </div>
                ))}
            </div>
    );
};
function getCards(setCards) {
    MTGRes.get().then(setCards, /* Error Log */ console.log);
}
``

## Class Components

Comming soon...

Enjoy!
