<?php
/**
 * @author Robin Appelman <icewind@owncloud.com>
 *
 * @copyright Copyright (c) 2015, ownCloud, Inc.
 * @license AGPL-3.0
 *
 * This code is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License, version 3,
 * as published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License, version 3,
 * along with this program.  If not, see <http://www.gnu.org/licenses/>
 *
 */

namespace OCA\windows_network_drive\Lib\Auth;

use OCP\IL10N;
use OCP\IUser;
use OCP\Files\External\Auth\AuthMechanism;
use OCP\Files\External\IStorageConfig;
use OCP\Security\ICredentialsManager;
use OCP\Files\External\InsufficientDataForMeaningfulAnswerException;
use OCP\Files\External\IStoragesBackendService;

/**
 * Global Username and Password
 */
class GlobalAuth extends AuthMechanism {
	public const CREDENTIALS_IDENTIFIER = 'password::global';

	/** @var ICredentialsManager */
	protected $credentialsManager;

	/** @var IL10N */
	private $l;

	public function __construct(IL10N $l, ICredentialsManager $credentialsManager) {
		$this->credentialsManager = $credentialsManager;
		$this->l = $l;

		$this
			->setIdentifier('password::global')
			->setVisibility(IStoragesBackendService::VISIBILITY_DEFAULT)
			->setScheme(self::SCHEME_PASSWORD)
			->setText($l->t('Global Credentials'));
	}

	public function getAuth($uid) {
		$auth = $this->credentialsManager->retrieve($uid, self::CREDENTIALS_IDENTIFIER);
		if (!\is_array($auth)) {
			return [
				'user' => '',
				'password' => ''
			];
		} else {
			return $auth;
		}
	}

	public function saveAuth($uid, $user, $password) {
		$this->credentialsManager->store($uid, self::CREDENTIALS_IDENTIFIER, [
			'user' => $user,
			'password' => $password
		]);
	}

	public function resetPassword($uid) {
		$credentials = $this->getAuth($uid);
		$this->saveAuth($uid, $credentials['user'], '');
	}

	public function manipulateStorageConfig(IStorageConfig &$storage, IUser $user = null) {
		if ($storage->getType() === IStorageConfig::MOUNT_TYPE_ADMIN) {
			$uid = '';
		} elseif ($user === null) {
			throw new InsufficientDataForMeaningfulAnswerException($this->l->t('No credentials saved'));
		} else {
			$uid = $user->getUID();
		}
		$credentials = $this->credentialsManager->retrieve($uid, self::CREDENTIALS_IDENTIFIER);

		if (\is_array($credentials)) {
			$storage->setBackendOption('user', $credentials['user']);
			$storage->setBackendOption('password', $credentials['password']);
		}
	}
}
