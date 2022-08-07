import { useLocation } from "react-router-dom";

const Classification = () => {
	const location = useLocation();
	const { hateAnimalList, likeAnimalList } = location.state;

	return (
		<div style={{ width: "100%", height: "100%" }}>
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<div
					style={{
						width: 1110,
						height: 83,
						marginTop: 60,
						marginBottom: 30,
						fontSize: 32,
						fontWeight: "bold",
						border: "1px solid #323232",
						backgroundColor: "#323232",
						color: "#fff",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					내가 좋아하는 동물
				</div>
				<div style={{ width: 1110, display: "flex", justifyContent: "center", alignItems: "center" }}>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							width: 540,
							height: "100%",
							border: "2px solid #006ebe",
							marginRight: 30,
						}}
					>
						<span style={{ fontSize: 24, fontWeight: "bold", color: "#006ebe", margin: "47px auto" }}>좋아요</span>
						{likeAnimalList.length !== 0 &&
							likeAnimalList.map((animal) => {
								return (
									<img
										key={animal.id}
										src={animal.img_url}
										style={{ width: 285, height: 285, marginBottom: 30 }}
										alt="animal"
									/>
								);
							})}
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							width: 540,
							height: "100%",
							border: "2px solid #d74b00",
						}}
					>
						<span style={{ fontSize: 24, fontWeight: "bold", color: "#d74b00", margin: "47px auto" }}>싫어요</span>
						{hateAnimalList.length !== 0 &&
							hateAnimalList.map((animal) => {
								return (
									<img
										key={animal.id}
										src={animal.img_url}
										style={{ width: 285, height: 285, marginBottom: 30 }}
										alt="animal"
									/>
								);
							})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Classification;
