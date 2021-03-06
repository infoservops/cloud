<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit891eb9295305e7d9509cabdbbaa2cfac
{
    public static $files = array (
        'e88992873b7765f9b5710cab95ba5dd7' => __DIR__ . '/..' . '/hoa/consistency/Prelude.php',
        '3e76f7f02b41af8cea96018933f6b7e3' => __DIR__ . '/..' . '/hoa/protocol/Wrapper.php',
    );

    public static $prefixLengthsPsr4 = array (
        'H' => 
        array (
            'Hoa\\Zformat\\' => 12,
            'Hoa\\Visitor\\' => 12,
            'Hoa\\Ustring\\' => 12,
            'Hoa\\Stream\\' => 11,
            'Hoa\\Ruler\\' => 10,
            'Hoa\\Regex\\' => 10,
            'Hoa\\Protocol\\' => 13,
            'Hoa\\Math\\' => 9,
            'Hoa\\Iterator\\' => 13,
            'Hoa\\File\\' => 9,
            'Hoa\\Exception\\' => 14,
            'Hoa\\Event\\' => 10,
            'Hoa\\Consistency\\' => 16,
            'Hoa\\Compiler\\' => 13,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Hoa\\Zformat\\' => 
        array (
            0 => __DIR__ . '/..' . '/hoa/zformat',
        ),
        'Hoa\\Visitor\\' => 
        array (
            0 => __DIR__ . '/..' . '/hoa/visitor',
        ),
        'Hoa\\Ustring\\' => 
        array (
            0 => __DIR__ . '/..' . '/hoa/ustring',
        ),
        'Hoa\\Stream\\' => 
        array (
            0 => __DIR__ . '/..' . '/hoa/stream',
        ),
        'Hoa\\Ruler\\' => 
        array (
            0 => __DIR__ . '/..' . '/hoa/ruler',
        ),
        'Hoa\\Regex\\' => 
        array (
            0 => __DIR__ . '/..' . '/hoa/regex',
        ),
        'Hoa\\Protocol\\' => 
        array (
            0 => __DIR__ . '/..' . '/hoa/protocol',
        ),
        'Hoa\\Math\\' => 
        array (
            0 => __DIR__ . '/..' . '/hoa/math',
        ),
        'Hoa\\Iterator\\' => 
        array (
            0 => __DIR__ . '/..' . '/hoa/iterator',
        ),
        'Hoa\\File\\' => 
        array (
            0 => __DIR__ . '/..' . '/hoa/file',
        ),
        'Hoa\\Exception\\' => 
        array (
            0 => __DIR__ . '/..' . '/hoa/exception',
        ),
        'Hoa\\Event\\' => 
        array (
            0 => __DIR__ . '/..' . '/hoa/event',
        ),
        'Hoa\\Consistency\\' => 
        array (
            0 => __DIR__ . '/..' . '/hoa/consistency',
        ),
        'Hoa\\Compiler\\' => 
        array (
            0 => __DIR__ . '/..' . '/hoa/compiler',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit891eb9295305e7d9509cabdbbaa2cfac::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit891eb9295305e7d9509cabdbbaa2cfac::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit891eb9295305e7d9509cabdbbaa2cfac::$classMap;

        }, null, ClassLoader::class);
    }
}
