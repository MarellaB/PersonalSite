'use client';

import { useState } from "react";
import { SiLinkedin, SiGithub, SiTwitter } from "react-icons/si";

export default function ContactSection() {
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const linkIconClasses = 'm-auto mb-2';
	const links = [
		{
			link: "https://www.linkedin.com/in/brandon-marella-287985b9/",
			icon: <SiLinkedin className={linkIconClasses} />,
			text: 'LinkedIn'
		},
		{
			link: "https://github.com/MarellaB",
			icon: <SiGithub className={linkIconClasses} />,
			text: 'GitHub'
		},
		{
			link: "https://twitter.com/BrandonMarella",
			icon: <SiTwitter className={linkIconClasses} />,
			text: 'Twitter'
		}
	]

	return (
		<div className="w-full h-screen flex flex-col justify-center">
			<h3 className="text-5xl font-bold text-white text-center mb-16">Contact Me</h3>
			<div className="flex flex-col space-y-16">
				<div className="w-1/2 m-auto flex flex-col space-y-4">
					<input onChange={(event) => setSubject(event.target.value)} value={subject} type="text" className="w-full rounded-lg px-4 py-2 border-2 border-white text-white bg-slate-950" placeholder="Subject" />
					<textarea onChange={(event) => setMessage(event.target.value)} value={message} rows="6" className="w-full rounded-lg px-4 py-2 border-2 border-white text-white bg-slate-950" placeholder="What do you want to chat about?" />
					<a href={`mailto:brandonmarella@gmail.com?subject=${subject}&body=${message}`} className="px-8 m-auto bg-white text-slate-950 text-2xl rounded-lg py-2 transition-all opacity-100 hover:opacity-60">Send Email</a>
				</div>
				<div className="m-auto flex flex-col space-y-6">
					<h2 className="text-white text-xl text-center font-bold">Or Find Me</h2>
					<div className="flex space-x-12 m-auto">
					{links.map((link, index) => (
							<a href={link.link} key={index} title={link.text} aria-label={link.text} target="_blank" className="text-center text-2xl text-white transition-all opacity-100 hover:opacity-60">
								{link.icon}
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}