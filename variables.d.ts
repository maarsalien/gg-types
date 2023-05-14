declare namespace gg {
  /**
   * The SDK version of the Android currently running on this device.
   * @example
   * print("ANDROID_SDK_INT: " + gg.ANDROID_SDK_INT)
   * // => 27
   */
  const ANDROID_SDK_INT: string

  /**
   * Arm x32.
   */
  const ASM_ARM: number

  /**
   * ARM x64.
   */
  const ASM_ARM64: number

  /**
   *  Thumb.
   */
  const ASM_THUMB: number

  /**
   * Number build of the GameGuardian.
   * @example
   * print("GG build number: " + gg.BUILD)
   * // => 5645
   */
  const BUILD: number

  /**
   * The absolute path to the GameGuardian specific cache directory on the filesystem.
   *
   * These files will be ones that get deleted first when the device runs low on storage. There is no guarantee when these files will be deleted.
   *
   * Note: you should not rely on the system deleting these files for you; you should always have a reasonable maximum, such as 1 MB, for the amount of space you consume with cache files, and prune those files when exceeding that space. If your app requires a larger cache (larger than 1 MB), you should use EXT_CACHE_DIR instead.
   *
   * Placed in internal memory. Not visible for other apps. Can be cleared by user.
   * @example
   * print("Cache dir: " + gg.CACHE_DIR)
   * // =>  '/data/data/catch_.me_.if_.you_.can_/cache'
   */
  const CACHE_DIR: string

  /**
   * Skip system libraries.
   */
  const DUMP_SKIP_SYSTEM_LIBS: number

  /**
   * The absolute path to the GameGuardian specific directory on the primary shared/external storage device where the GameGuardian can place cache files it owns.
   *
   * May return same value as CACHE_DIR if shared storage is not currently available. Usually placed in external memory. Visible for other apps. Can be cleared by user.
   * @example print("External cache dir: " + gg.EXT_CACHE_DIR)
   * // => '/sdcard/Android/data/catch_.me_.if_.you_.can_/cache'
   */
  const EXT_CACHE_DIR: string

  /**
   * The absolute path to the directory on the primary shared/external storage device where the GameGuardian can place persistent files it owns.
   *
   * May return same value as FILES_DIR if shared storage is not currently available. Usually placed in external memory. Visible for other apps.
   * @example print("External files dir: " + gg.EXT_FILES_DIR)
   * // => '/sdcard/Android/data/catch_.me_.if_.you_.can_/files'
   */
  const EXT_FILES_DIR: string

  /**
   * The primary shared/external storage directory.
   * @example
   * print("External storage: " + gg.EXT_STORAGE)
   * const [file] = io.open(gg.EXT_STORAGE + "/test_log.txt", "w")
   * file?.write("This is log file")
   * file?.close()
   * // => '/mnt/sdcard'
   */
  const EXT_STORAGE: string

  /**
   * The path of the directory holding GameGuardian files.
   *
   * Placed in internal memory. Not visible for other apps.
   * @example
   * print("Files dir: " + gg.FILES_DIR)
   *  // => '/data/data/catch_.me_.if_.you_.can_/files'
   */
  const FILES_DIR: string

  /**
   * Allows the value to change only within specified range.
   */
  const FREEZE_IN_RANGE: number

  /**
   * Allows the value to decrease, but does not allow to increase.
   */
  const FREEZE_MAY_DECREASE: number

  /**
   * Allows the value to increase, but does not allow to decrease.
   */
  const FREEZE_MAY_INCREASE: number

  /**
   * Freezes the value, not allowing it to change.
   *
   * Used by default.
   */
  const FREEZE_NORMAL: number

  /**
   * Append to list.
   */
  const LOAD_APPEND: number

  /**
   * Load values.
   */
  const LOAD_VALUES: number

  /**
   * Load values and freeze.
   */
  const LOAD_VALUES_FREEZE: number

  /**
   * Package name of the GameGuardian.
   * @example
   * print("GG package: " + gg.PACKAGE)
   * // => 'catch_.me_.if_.you_.can_'
   */
  const PACKAGE: string

  /**
   * Pointer to executable memory.
   */
  const POINTER_EXECUTABLE: number

  /**
   * Pointer to executable and writable memory.
   */
  const POINTER_EXECUTABLE_WRITABLE: number

  /**
   * Not a pointer.
   */
  const POINTER_NO: number

  /**
   * Pointer to read-only memory.
   */
  const POINTER_READ_ONLY: number

  /**
   * Pointer to writable memory.
   */
  const POINTER_WRITABLE: number

  /**
   * Pages may be executed.
   */
  const PROT_EXEC: number

  /**
   * Pages may not be accessed.
   */
  const PROT_NONE: number

  /**
   * Pages may be read.
   */
  const PROT_READ: number

  /**
   * Pages may be written.
   */
  const PROT_WRITE: number

  /**
   * "A: Anonymous" memory region.
   */
  const REGION_ANONYMOUS: number

  /**
   * "As: Ashmem" memory region.
   */
  const REGION_ASHMEM: number

  /**
   * "B: Bad (dangerous)" memory region.
   */
  const REGION_BAD: number

  /**
   * "Ca: C++ alloc" memory region.
   */
  const REGION_C_ALLOC: number

  /**
   * "Cb: C++ .bss" memory region.
   */
  const REGION_C_BSS: number

  /**
   * "Cd: C++ .data" memory region.
   */
  const REGION_C_DATA: number

  /**
   * "Ch: C++ heap" memory region.
   */
  const REGION_C_HEAP: number

  /**
   * "Xa: Code app (dangerous)" memory region.
   */
  const REGION_CODE_APP: number

  /**
   * "Xs: Code system (dangerous)" memory region.
   */
  const REGION_CODE_SYS: number

  /**
   * "J: Java" memory region.
   */
  const REGION_JAVA: number

  /**
   * "Jh: Java heap" memory region.
   */
  const REGION_JAVA_HEAP: number

  /**
   * "O: Other (slow)" memory region.
   */
  const REGION_OTHER: number

  /**
   * "PS: PPSSPP" memory region.
   */
  const REGION_PPSSPP: number

  /**
   * "S: Stack" memory region.
   */
  const REGION_STACK: number

  /**
   * "V: Video" memory region.
   */
  const REGION_VIDEO: number

  /**
   * Save list as text.
   */
  const SAVE_AS_TEXT: number

  const SIGN_EQUAL: number
  const SIGN_FUZZY_EQUAL: number
  const SIGN_FUZZY_GREATER: number
  const SIGN_FUZZY_LESS: number
  const SIGN_FUZZY_NOT_EQUAL: number
  const SIGN_GREATER_OR_EQUAL: number
  const SIGN_LESS_OR_EQUAL: number
  const SIGN_NOT_EQUAL: number

  /**
   * Memory editor tab.
   */
  const TAB_MEMORY_EDITOR: number

  /**
   * Saved list tab.
   */
  const TAB_SAVED_LIST: number

  /**
   * Search tab.
   */
  const TAB_SEARCH: number

  /**
   * Settings tab.
   */
  const TAB_SETTINGS: number

  /**
   * Type Auto.
   */
  const TYPE_AUTO: number

  /**
   * Type Byte.
   *
   * Size: 1 byte. Align: 1 byte boundary.
   */
  const TYPE_BYTE: number

  /**
   * Type Double.
   *
   * Size: 8 byte. Align: 4 (x86) or 8 (ARM) byte boundary.
   */
  const TYPE_DOUBLE: number

  /**
   * Type Dword.
   *
   * Size: 4 byte. Align: 4 byte boundary.
   */
  const TYPE_DWORD: number

  /**
   * Type Float.
   *
   * Size: 4 byte. Align: 4 byte boundary.
   */
  const TYPE_FLOAT: number

  /**
   * Type Qword.
   *
   * Size: 8 byte. Align: 4 (x86) or 8 (ARM) byte boundary.
   */
  const TYPE_QWORD: number

  /**
   * Type Word.
   *
   * Size: 2 byte. Align: 2 byte boundary.
   */
  const TYPE_WORD: number

  /**
   * Type Xor.
   *
   * Size: 4 byte. Align: 4 byte boundary.
   */
  const TYPE_XOR: number

  /**
   * Text version of the GameGuardian.
   * @example print("GG string version: " + gg.VERSION)
   */
  const VERSION: string

  /**
   * Numeric version of the GameGuardian.
   * @example print("GG numeric version: " + gg.VERSION_INT)
   */
  const VERSION_INT: number
}
