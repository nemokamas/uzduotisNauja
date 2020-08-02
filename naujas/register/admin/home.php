<?php
include('../functions.php');

if (!isAdmin()) {
	$_SESSION['msg'] = "Prisijunkite";
	header('location: ../login.php');
}

if (isset($_GET['logout'])) {
	session_destroy();
	unset($_SESSION['user']);
	header("location: ../login.php");
}
?>
<!DOCTYPE html>
<html>
<head>
	<title>Home</title>
	
</head>
<body>
	<div class="header">
		<h2>Labas, Administratoriau!</h2>
	</div>
	<div class="content">
		<!-- notification message -->
		<?php if (isset($_SESSION['success'])) : ?>
			<div class="error success" >
				<h3>
					<?php
						echo $_SESSION['success'];
						unset($_SESSION['success']);
					?>
				</h3>
			</div>
		<?php endif ?>

		<!-- logged in user information -->

				<?php  if (isset($_SESSION['user'])) : ?>
					<strong><?php echo $_SESSION['user']['username']; ?></strong>

					<small>
						<i  style="color: #888;">(<?php echo ucfirst($_SESSION['user']['user_type']); ?>)</i>
						<br>
						<br>
						<a href="home.php?logout='1'" style="color: green;">ATSIJUNGTI</a> <br> <br>
						<p> <a href="../../index.php" style="color: green;">Į PRADŽIĄ</a> </p><br>
	                        <!-- <a style="color: green;" href="create_user.php">

							 + PRIDĖTI VARTOTOJĄ</a><br><br> -->

					   <p> <a href="../../pardavejai_crud/crud.php" style="color: green;">DARBUOTOJAI</a> </p><br>
					   <p> <a href="../../form.php" style="color: green;">PREKĖS</a> </p>
					</small>

				<?php endif ?>
			</div>
		</div>
	</div>
</body>
</html>