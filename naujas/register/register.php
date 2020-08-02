<?php include('functions.php') ?>
<!DOCTYPE html>
<html>
<head>

</head>
<body>
<div class="header">
	<h4>REGISTER</h4>
</div>
<form method="post" action="register.php">
	<div class="input-group">
		<input type="text" name="username" placeholder="Username">
	</div>
	<div class="input-group">
		<input type="email" name="email" placeholder="Email">
	</div>
	<div class="input-group">
		<input type="password" placeholder="Password"name="password_1">
	</div>
	<div class="input-group">
		<input type="password" placeholder="Repeat password"name="password_2">
	</div>
	<div class="input-group">
		<button type="submit" class="btn" name="register_btn">Registruotis</button>
	</div>
	<p>
		Jau užsiregistravote? <a href="login.php">Prisijungti</a>
	</p>
	<p>
		<a href="../index.php">Back</a>
	</p>
</form>
</body>
</html>
