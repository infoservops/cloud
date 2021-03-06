<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit20f31f9c6e3747898d018bab29e5ece5
{
    public static $prefixLengthsPsr4 = array (
        'R' => 
        array (
            'Rowbot\\URL\\' => 11,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Rowbot\\URL\\' => 
        array (
            0 => __DIR__ . '/..' . '/rowbot/url/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit20f31f9c6e3747898d018bab29e5ece5::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit20f31f9c6e3747898d018bab29e5ece5::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit20f31f9c6e3747898d018bab29e5ece5::$classMap;

        }, null, ClassLoader::class);
    }
}
