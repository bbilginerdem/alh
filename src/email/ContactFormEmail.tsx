import {
	Body,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Preview,
	Section,
	Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
	message: string;
	senderEmail: string;
};

const ContactFormEmail = ({ message, senderEmail }: ContactFormEmailProps) => {
	return (
		<Html>
			<Head />
			<Preview>ALH Web sitesinden yeni mesaj</Preview>
			<Tailwind>
				<Body className="bg-gray-100 text-black">
					<Container>
						<Section className="borderBlack my-10 rounded-md bg-white px-10 py-4">
							<Heading className="leading-tight">
								İletişim formundan aşağıdaki mesajı aldınız:
							</Heading>
							<Text>{message}</Text>
							<Hr />
							<Text>Gönderenin e-posta adresi: {senderEmail}</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default ContactFormEmail;
