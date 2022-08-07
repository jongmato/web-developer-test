import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Main = () => {
	const [animalList, setAnimalList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const getAnimalList = async () => {
		const res = await fetch(
			`https://script.googleusercontent.com/macros/echo?user_content_key=lpYpJlpIi8ykVgpnP4PRUGKFNBvSHUCkkFQTLqg4EWFngmRJ5YXzv8cdiVT4LgRbdrHyFZ_BoD8u4u8r5J9n2D8BIMl6nV7Pm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMnlFFJdsZ45o9OHBZtd23PRzGqnMMtwVXxZatTcZ_ElWWQARivlerawy0qOn_ogddlOaIY5A3XJYuWNj0SVUwM&lib=MQ5y52npMqnCycenuTos7mqgLslxuhQuA`,
		);
		const data = await res.json();
		const newData = data.map((list) => {
			return { ...list, isLike: false, isHate: false };
		});
		setAnimalList(newData);
		setIsLoading(false);
	};
	useEffect(() => {
		getAnimalList();
	}, []);
	const handleClickLikeButton = (e) => {
		const id = e.currentTarget.id;
		const isLikeAnimal = animalList.filter((list) => list.id === id)[0].isLike;
		if (isLikeAnimal) {
			const newAnimalList = animalList.map((list) =>
				list.id === id ? { ...list, isLike: false, isHate: false } : { ...list },
			);
			setAnimalList(newAnimalList);
			return;
		}
		const newAnimalList = animalList.map((list) =>
			list.id === id ? { ...list, isLike: true, isHate: false } : { ...list },
		);
		setAnimalList(newAnimalList);
	};
	const handleClickHateButton = (e) => {
		const id = e.currentTarget.id;
		const isHateAnimal = animalList.filter((list) => list.id === id)[0].isHate;
		if (isHateAnimal) {
			const newAnimalList = animalList.map((list) =>
				list.id === id ? { ...list, isLike: false, isHate: false } : { ...list },
			);
			setAnimalList(newAnimalList);
			return;
		}
		const newAnimalList = animalList.map((list) =>
			list.id === id ? { ...list, isLike: false, isHate: true } : { ...list },
		);
		setAnimalList(newAnimalList);
	};
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
				{isLoading ? (
					<div>Loading ...</div>
				) : (
					<div style={{ width: 1110, display: "flex" }}>
						<div
							style={{
								display: "grid",
								gridTemplateColumns: "1fr 1fr",
								rowGap: 30,
								columnGap: 30,
								marginRight: 110,
								height: 720,
							}}
						>
							{animalList.map((animal) => {
								return (
									<div key={animal.id} style={{ display: "flex", flexDirection: "column" }}>
										<img src={animal.img_url} style={{ width: 285, height: 285 }} alt="animal" />
										<div style={{ display: "flex", width: 285, justifyContent: "flex-start", marginTop: 15 }}>
											<button
												id={animal.id}
												{...(animal.isLike
													? {
															style: {
																width: 135,
																height: 45,
																border: "1px solid #a5a5a5",
																fontSize: 10,
																marginRight: 15,
																cursor: "pointer",
																color: "#fff",
																backgroundColor: "#006ebe",
															},
													  }
													: {
															style: {
																width: 135,
																height: 45,
																border: "1px solid #a5a5a5",
																fontSize: 10,
																marginRight: 15,
																cursor: "pointer",
															},
													  })}
												onClick={handleClickLikeButton}
											>
												좋아요
											</button>
											<button
												id={animal.id}
												{...(animal.isHate
													? {
															style: {
																width: 135,
																height: 45,
																border: "1px solid #a5a5a5",
																fontSize: 10,
																cursor: "pointer",
																color: "#fff",
																backgroundColor: "#d74b00",
															},
													  }
													: {
															style: {
																width: 135,
																height: 45,
																border: "1px solid #a5a5a5",
																fontSize: 10,
																cursor: "pointer",
															},
													  })}
												onClick={handleClickHateButton}
											>
												싫어요
											</button>
										</div>
									</div>
								);
							})}
						</div>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								width: 400,
							}}
						>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
									border: "1px solid #323232",
									width: 400,
									height: 720,
									marginBottom: 30,
								}}
							>
								{animalList.map((animal) => {
									return (
										<span
											key={animal.id}
											style={{ fontSize: 24, fontWeight: "bold", marginBottom: 60 }}
											{...(animal.isHate
												? {
														style: {
															fontSize: 24,
															fontWeight: "bold",
															marginBottom: 60,
															color: "#d74b00",
														},
												  }
												: animal.isLike
												? {
														style: {
															fontSize: 24,
															fontWeight: "bold",
															marginBottom: 60,
															color: "#006ebe",
														},
												  }
												: {
														style: {
															fontSize: 24,
															fontWeight: "bold",
															marginBottom: 60,
														},
												  })}
										>
											{animal.name}
										</span>
									);
								})}
							</div>
							<Link
								to={{
									pathname: "/classification",
									state: {
										likeAnimalList: animalList.filter((list) => list.isLike === true),
										hateAnimalList: animalList.filter((list) => list.isHate === true),
									},
								}}
								style={{ textDecoration: "none" }}
							>
								<button
									style={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										width: 400,
										height: 80,
										fontSize: 24,
										fontWeight: "bold",
										background: "#DCDCDC",
										border: "1px solid #323232",
										cursor: "pointer",
									}}
								>
									좋아하는 동물들 나누기
								</button>
							</Link>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Main;
