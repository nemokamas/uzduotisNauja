<?php include('../functions.php') ?>
<!DOCTYPE html>
<html>
<head>
</head>
<body>
	<div class="header">
		<h2>Create user</h2>
	</div>

	<form method="post" action="create_user.php">

		<?php echo display_error(); ?>

		<div class="input-group">
			<input type="text" name="username" placeholder="Vartotojo vardas"value="<?php echo $username; ?>">
		</div>
		<div class="input-group">
			<input type="email" name="email" placeholder="El.paštas" value="<?php echo $email; ?>">
		</div>
		<div class="input-group">
			<select name="user_type" id="user_type" >
				<option value="">Pasirinkti vartotojo tipą</option>
				<option value="admin">Administratorius</option>
				<option value="user">Vartotojas</option>
			</select>
		</div>
		<div class="input-group">
			<input type="password" placeholder="Slaptažodis"name="password_1">
		</div>
		<div class="input-group">
			<input type="password"placeholder="Pakartoti slaptažodį" name="password_2">
		</div>
		<div class="input-group">
			<button type="submit" class="btn" name="register_btn"> + Sukurti vartotoją</button>
		</div>
	</form>
</body>
</html>
