interface HeaderProps {
	systemTime: string;
}

export default function Header({ systemTime }: HeaderProps) {
	return (
		<div className="bg-border-shadow text-bg-main flex justify-between p-2 text-sm">
			<span>L.U.C.I.A.N. TERMINAL v2.3 - [AUTHORIZED USER]</span>
			<span>{systemTime}</span>
		</div>
	);
}
