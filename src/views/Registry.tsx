import ContentHeader from "../components/ContentHeader";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import cb from '../assets/images/registry/cb2.png';
import target from '../assets/images/registry/target2.png';
import amazon from '../assets/images/registry/amazon2.png';
import RegistryItem from "../components/RegistryItem";
import '../styles/registry.scss'

const Registries = [
    {
        'image': cb,
        'name': 'Crate & Barrel',
        'website': 'https://www.crateandbarrel.com/gift-registry/brooke-barrs-and-nick-barrs/r6515129',
    },
    {
        'image': amazon,
        'name': 'Amazon',
        'website': 'https://www.amazon.com/wedding/share/writteninthebarrs',
    },
    {
        'image': target,
        'name': 'Target',
        'website': 'https://www.target.com/gift-registry/gift/writteninthebarrs',
    }
    
]

const Registry: React.FC = () => {
    return (
        <div id="registry">
            <SiteHeader/>
            <ContentHeader title={"REGISTRY"}/>
            <div className="registry-container">
                <div className="registry-row">
                    { Registries.map((registry) => <RegistryItem {...registry}/>) }
                </div>
            </div>
            <SiteFooter/>
        </div>
    )
}

export default Registry;