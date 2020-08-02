<?php include('functions.php') ?>
<!DOCTYPE html>
<html>
<head>
</head>
<body>
	<div class="header">
		<h4>PRISIJUNGTI</h4>
	</div>
	<form method="post" action="login.php">
	    <div class="input-group">
			<input type="text" name="username" placeholder="Username">
		</div>
		<div class="input-group">
			<input type="password" name="password" placeholder="Password">
		</div>
		<div class="input-group">
			<button type="submit" class="btn" name="login_btn">Login</button>
		</div>
		<p>
			Naujas narys? <a href="register.php">Register</a>
		</p>
		<p>
			<a href="../index.php">Back</a>
		</p>
	</form>
</body>
</html>
