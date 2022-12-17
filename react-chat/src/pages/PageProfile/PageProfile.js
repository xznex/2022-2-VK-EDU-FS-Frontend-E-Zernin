import {ProfileHeader} from '../../components/Header/ProfileHeader'
import {ProfileContent} from '../../components/Content/ProfileContent'
export default function PageProfile() {
	return (
		<div className="container">
			<ProfileHeader />
			<ProfileContent />
		</div>
	);
}