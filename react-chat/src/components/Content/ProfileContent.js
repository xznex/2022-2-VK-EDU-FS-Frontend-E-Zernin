import React from "react";
import styles from './ProfileContent.module.css'
export function ProfileContent() {
	return (
		<div className={styles.content}>
			<div className="avatar_edited">
				<img src={process.env.PUBLIC_URL + '/avatarich.jpg'} alt="avatar" id={styles.avatar} />
			</div>
			<div className="settings">
				<div className={styles.profile_block}>
					<div className={styles.profile_edit}>
						<label htmlFor="full_name">Full name</label>
						<input type="text" id="full_name" />
					</div>
				</div>

				<div className={styles.profile_block}>
					<div className={styles.profile_edit}>
						<label htmlFor="user_name">Username</label>
						<input type="text" id="user_name" />
					</div>
					<p className={styles.comment}>Minimum length is 5 characters</p>
				</div>

				<div className={styles.profile_block}>
					<div className={styles.profile_edit}>
						<label htmlFor="bio">Bio</label>
						<textarea name="bio" id="bio" cols="30" rows="10"></textarea>
					</div>
					<p className={styles.comment}>Any details about you</p>
				</div>
			</div>
		</div>
	);
}
